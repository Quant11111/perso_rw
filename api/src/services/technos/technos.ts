import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const technos: QueryResolvers['technos'] = () => {
  return db.techno.findMany()
}

export const techno: QueryResolvers['techno'] = ({ id }) => {
  return db.techno.findUnique({
    where: { id },
  })
}

export const createTechno: MutationResolvers['createTechno'] = ({ input }) => {
  return db.techno.create({
    data: input,
  })
}

export const updateTechno: MutationResolvers['updateTechno'] = ({
  id,
  input,
}) => {
  return db.techno.update({
    data: input,
    where: { id },
  })
}

export const deleteTechno: MutationResolvers['deleteTechno'] = ({ id }) => {
  return db.techno.delete({
    where: { id },
  })
}
