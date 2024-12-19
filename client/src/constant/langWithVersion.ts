interface langConfigI{
   lang:string,
   version:string
}

export interface langWithVersionsI {
   [key:string]:langConfigI
}

export const langWithVersions:langWithVersionsI={
     
    'python':{
        lang:'python',
        version:'4'
     },

     'java':{
        lang:'java',
        version:'5'
     },
    
     'cpp':{
        lang:'cpp',
        version:'6'
     },

     'c':{
        lang:'c',
        version:'6'
     },

     'csharp':{
        lang:'csharp',
        version:'5'
     },

     'go':{
        lang:'go',
        version:'5'
     },

     'nodejs':{
        lang:'nodejs',
        version:'5'
     },

     'php':{
        lang:'php',
        version:'5'
     },


     'python3':{
        lang:'python3',
        version:'5'
     },

     'rust':{
        lang:'rust',
        version:'5'
     },

     'sql':{
        lang:'sql',
        version:'5'
     },

     



     

}