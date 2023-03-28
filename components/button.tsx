import Link, { LinkProps } from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

type Props = LinkProps & {
  text: string;
  [key: string]: any;
};

const Button = ({ as, href, text, ...rest }: Props) => {
  const router = useRouter();

  return (
    <Link
      {...rest}
      as={as}
      href={href}
      className={classNames(
        "rounded bg-transparent px-4 py-1 font-medium text-zinc-900 transition-colors hover:bg-neutral-200",
        router.pathname === href && "bg-neutral-200",
        rest.className
      )}
    >
      <button>{text}</button>
    </Link>
  );
};

export default Button;
