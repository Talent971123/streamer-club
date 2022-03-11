import { useUser } from "@auth0/nextjs-auth0";
import { USER_ROLE } from "utils/constData";

function User() {

    const { user } = useUser()

    const isSuperAdmin: boolean =
        USER_ROLE.ADMIN === user?.user_role_id;

    const isAdmin: boolean =
        isSuperAdmin ||
        USER_ROLE.CLUB_ADMIN === user?.user_role_id ||
        USER_ROLE.TEAM_ADMIN === user?.user_role_id;

    const isClubAdmin: boolean =
        isSuperAdmin ||
        USER_ROLE.CLUB_ADMIN === user?.user_role_id;

    const isPlayer: boolean =
        isAdmin ||
        USER_ROLE.PLAYER === user?.user_role_id;

    const isFollower: boolean =
        isSuperAdmin ||
        USER_ROLE.USER === user?.user_role_id;

    const isFan: boolean =
        isSuperAdmin ||
        USER_ROLE.FAN === user?.user_role_id;


    return { user, isSuperAdmin, isAdmin, isClubAdmin, isPlayer, isFollower, isFan }

}

export default User