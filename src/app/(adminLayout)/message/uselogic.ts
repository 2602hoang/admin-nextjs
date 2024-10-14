import { useAuth } from "@/contexts/AuthContext";
import { useAxios } from "@/providers/AxiosProvider";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useFetchUserData } from "../profile/useLogic";
import { Messages } from "./page";

const useLogicComments = () => {
  const [comments, setComments] = useState<string>("");
  const [repkey, setRepkey] = useState<number | 0>(0);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { axiosInstance } = useAxios();
  const { userId, userRole } = useAuth();
  const queryClient = useQueryClient();
  const { user } = useFetchUserData();
  const [replyingId, setReplyingId] = useState<number | null>(null);
  const handleReplyClick = (key: number) => {
    setReplyingId(replyingId === key ? null : key);
  };

  const fetchData = async () => {
    const res = await axiosInstance(0).get<Messages[]>(
      `api/v1/email/admin/get`
    );
    return res.data;
  };

  const doMessage = async () => {
    const res = await axiosInstance(0).post<Messages[]>(
      `api/v1/email/admin/post`,
      {
        id: userId,
        username: user?.username,
        phone: user?.phone,
        role: userRole,
        comments: comments,
        repkey: repkey,
        time: new Date(),
      }
    );
    return res.data;
  };

  const { data, isLoading, error } = useQuery(["messages"], fetchData, {
    // refetchInterval: 3000,
    // enabled: !!userId,
  });

  const mutation = useMutation(doMessage, {
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });
  const groupMessages = (messages: Messages[]) => {
    return messages.reduce((acc, message) => {
      const key = `${message.id}-${message.username}-${message.role}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  };
  const filterCommentsByRole = (messages: Messages[], role: number) => {
    return messages.filter((message) => message.role === role);
  };

  const filteredComments = filterCommentsByRole(data || [], 123);
  const groupedMessages = groupMessages(data || []);
  const handleCancel = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const openModal = (id: number) => {
    setSelectedId(id);
    setOpen(true);
  };

  return {
    replyingId,
    setReplyingId,
    handleReplyClick,
    data,
    isLoading,
    error,
    mutation,
    userRole,
    userId,
    comments,
    setComments,
    repkey,
    setRepkey,
    groupMessages,
    handleCancel,
    openModal,
    open,
    selectedId,
    groupedMessages,
    setSelectedId,
    filteredComments,
  };
};

export default useLogicComments;
