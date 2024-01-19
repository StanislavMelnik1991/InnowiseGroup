import { SVGProps, Ref, forwardRef, memo } from "react";
interface IExtendedIcon extends SVGProps<SVGSVGElement> {
  isDisabled?: boolean;
  size?: number;
}

const SvgComponent = (
  { stroke = "#292D32", size = 24, ...props }: IExtendedIcon,
  ref: Ref<SVGSVGElement>,
) => {
  return (
    <svg
      {...props}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
    >
      <path
        d="M2.78516 8.7041H20.9529"
        stroke={stroke}
        strokeWidth={1.60304}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.4865 8.07198V17.1559C21.4865 20.362 19.8834 22.4993 16.143 22.4993H7.59347C3.85304 22.4993 2.25 20.362 2.25 17.1559V8.07198C2.25 4.8659 3.85304 2.72852 7.59347 2.72852H16.143C19.8834 2.72852 21.4865 4.8659 21.4865 8.07198Z"
        stroke={stroke}
        strokeWidth={1.60304}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6957 13.25H11.7047"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99451 13.25H8.00349"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99451 17H8.00349"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7535 16.999H11.7446"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4547 13.249H15.4457"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.25098V4.25098"
        stroke={stroke}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 1.25098V4.25098"
        stroke={stroke}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as CalendarIcon };
