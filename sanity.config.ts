import { defineConfig} from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from "./sanity/schemas";


 export const config = defineConfig(
    {
        projectId : 'ktjlfdyf',
        dataset : 'production',
        title: 'my porfolio',
        apiVersion: '2023-04-04',
        basePath : '/admin',
        plugins :[
            deskTool(),
        ],
        schema:{types: schemas},
        useCdn:false
    }
)
