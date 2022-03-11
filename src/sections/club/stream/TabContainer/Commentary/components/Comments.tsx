import { useSubscription } from "@apollo/client";
import subscriptions from "graphql/stream/subscriptions";
import { StreamPageContext } from "hooks/context/StreamPageContext";
import React, { useContext, useState } from "react";
import { CommentCard } from './index';

function Comments() {
    const { match_id }: any = useContext(StreamPageContext);
    const [comments, setComments] = useState<any>([]);

    useSubscription(subscriptions.SUB_COMMENTS, {
        variables: {
            match_id,
        },
        onSubscriptionData({ subscriptionData: { data } }) {
            data && setComments(data.events);
        },
    });

    return (
        <>
            {comments && comments.map((item: any, index: number) => <CommentCard data={item} key={`comment-card-${index}`} />)}
        </>
    )
}

export default Comments