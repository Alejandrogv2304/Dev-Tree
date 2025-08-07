import type { SocialNetwork } from "../types";

type DevTreeLinkProps ={
    link: SocialNetwork
}

export default function DevTreeLink({link}: DevTreeLinkProps) {
  return (
    <li className="py-2 px-5 bg-white items-center flex rounded-lg">
      <div
      className="w-12 h-12 bg-cover"
      style={{backgroundImage: `url('/social/icon_${link.name}.svg')`}}>
        
      </div>
      <p className="capitalize">Visita mi: <span>{link.name}</span></p>
    </li>
  )
}
