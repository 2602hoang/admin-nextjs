import { IconEditP, IconInforP, IconViewP } from "@/icon/DataIcon";

export const ActionsProduct = () => {
  return (
    <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
      <div className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
        {[
          {
            svg: <IconViewP />,
            label: "View",
          },
          {
            svg: <IconEditP />,
            label: "Edit",
          },
          {
            svg: <IconInforP />,
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
