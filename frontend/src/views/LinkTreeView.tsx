import { useState } from "react";
import { social } from "../data/social"
import DevTreeInput from "../components/DevTreeInput";
import { isValidUrl } from "../utils";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../api/DevTreeAPI";

export default function LinkTreeView() {

  const [devTreeLinks, setDevTreeLinks] = useState(social);

  const {mutate} = useMutation({
    mutationFn: updateProfile,
    onError: (error)=>{
    toast.error(error.message)
    },
    onSuccess: ()=>{
     toast.success('Perfil Actualizado Correctamente')
    }
  })

  const handleUrlChange = (e:  React.ChangeEvent<HTMLInputElement>)=>{
    const updatedLinks = devTreeLinks.map(link => link.name === e.target.name ? {...link, url:e.target.value }: link
    )
    setDevTreeLinks(updatedLinks)
  }

  const handleEnableLinks = (socialNetwork: string)=>{
    const updatedLinks = devTreeLinks.map(link => {
      if(link.name === socialNetwork){
        if(isValidUrl(link.url)){
        return {...link, enabled: !link.enabled } 
        }else{
          toast.error('Url no válida')
        }
      } 
      return link
    } )
    setDevTreeLinks(updatedLinks)
  }
  return (
    <div className="space-y-5">
      {devTreeLinks.map(item =>(
       <DevTreeInput
       key={item.name}
       item={item}
       handleUrlChange={handleUrlChange}
       handleEnabledLink={handleEnableLinks}/>
      ))}

      <button
      className="bg-cyan-400 text-lg w-full rounded-lg font-bold p-2 uppercase text-slate-600"
      >Guardar Cambios</button>
    </div>
  )
}
