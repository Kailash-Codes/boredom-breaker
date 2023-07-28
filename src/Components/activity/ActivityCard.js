import React from "react";
import CardHeading from "./CardHeading";
const ActivityCard = (props) => {
  return (
    <div className="mb-3">
    <CardHeading head={props.activityHead} body={props.activityBody} />
    <CardHeading head={props.typeHead} body={props.typeBody} />
    <CardHeading head={props.participantsHead} body={props.participantsBody} />
    <CardHeading head={props.accessibilityHead} body={props.accessibilityBody} />
    <CardHeading head={props.priceHead} body={props.priceBody} />
    </div>
  );
};

export default ActivityCard;
