import prisma from "../../models/common/prisma";

export const findAll = () =>{
    return prisma.product.findMany({
        include:{
            productType:true
        }
    });
}

export const findById = (id:number) =>{
    return prisma.product.findUniqueOrThrow({
        where:{
            productId:id
        }
    });
}

export const findByName = (name:string) =>{
    return prisma.product.findMany({
        where:{
            name:{
                contains:name
            }
        }
    });
}

export const findByProductionYear = (year:number) =>{
    return prisma.product.findMany({
        where:{
            productionYear:year
        }
    });
}

export const findByModel = (model:string) =>{
    return prisma.product.findMany({
        where:{
            model:{
                contains:model
            }
        }
    });
}

export const findByManufacturer = (manufacturer:string) =>{
    return prisma.product.findMany({
        where:{
            manufacturer:{
                contains:manufacturer
            }
        }
    })
}

//TODO: add CREATE DELETE UPDATE