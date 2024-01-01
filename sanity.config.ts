import { defineConfig} from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from "./sanity/schemas";


 export const config = defineConfig(
    {
        projectId : 'ktjlfdyf',
        dataset : 'production',
        title: 'porfolio',
        apiVersion: '2023-12-25',
        basePath : '/admin',
        plugins :[
            deskTool(),
        ],
        schema:{types: schemas},
    }
)
