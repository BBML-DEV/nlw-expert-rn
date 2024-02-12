import { Link, LinkProps } from "expo-router";


type ButtonLinkProps = LinkProps<string> & {
    title: string;
}


export default function ButtonLink ({title, ...rest}: ButtonLinkProps){
    return (
        <Link className="text-slate-300 text-center text-base-font-body" {...rest}>
            {title}
        </Link>
    )
}