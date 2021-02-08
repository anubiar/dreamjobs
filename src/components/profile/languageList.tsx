import { List, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { LanguageSelect } from "../pickers/select/LanguageSelect";



const LanguageList = ({list,languages,levels,handleRemove} : any) => {

    useEffect(() => {
        console.log(list);
    },[list]);
    return(
        // <List>
            
                // list.map(
                //     (item : any) => (
                //         <LanguageSelect key={item.id} item={item} languages={languages} levels={levels} handleRemove={handleRemove}/>
                //     )
                // )
               
            
            

        
        // </List> 
        <Typography>I am here</Typography>
        
    )
}

export {LanguageList};