import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response){
    if(request.method === 'POST'){
        const client = new SiteClient("a10d36c0b61379a12eb910a3069ffe");
        const registroCriado = await client.items.create({
            itemType: "969055",
            ...request.body,
            //title: "Comunidade de teste",
            //imageUrl: "https://github.com/vna15.png",
            //creatorSlug: "vna15"
        })
        response.json({
            dados: 'Algum dado quaquer',
            registroCriado: registroCriado
        })
        return;
    }  
}