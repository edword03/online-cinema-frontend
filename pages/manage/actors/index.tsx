import { ActorsList } from "@/components/screens/admin/actors"
import { NextPageAuth } from "@/types/check-role"

const ActorsPage: NextPageAuth = () => {
  return <ActorsList />
}

ActorsPage.isOnlyAdmin = true

export default ActorsPage