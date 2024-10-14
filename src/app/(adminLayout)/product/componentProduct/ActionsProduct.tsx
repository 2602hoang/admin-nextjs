import { IconEditP, IconInforP, IconViewP } from "@/icon/DataIcon";
interface Props {
  open: boolean;
  handleOpen: () => void;
}
export const ActionsProduct: React.FC<Props> = ({ open, handleOpen }) => {
  return (
    <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-center w-full">
      <div className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-3 transition-all duration-500 delay-200 rounded-full shadow-sm">
        {[
          {
            svg: <IconViewP />,
            label: "View",
          },
          // {
          //   svg: <IconEditP />,
          //   label: "Edit",
          // },
          {
            svg: (
              <span onClick={handleOpen}>
                <IconInforP />
              </span>
            ),
            label: "Info",
          },
        ].map((button, index) => (
          <a
            key={index}
            className="hover:scale-110 hover:text-blue-700 cursor-pointer transition-all duration-500 delay-200"
          >
            {button.svg}
          </a>
        ))}
      </div>
    </div>
  );
};
