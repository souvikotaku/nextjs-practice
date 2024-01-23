import React from "react";

interface Paramprops {
  params: {
    id: string;
  };
}

const ProfileDetails = ({ params }: Paramprops) => {
  return <div>{`ProfileDetails of ${params?.id}`}</div>;
};

export default ProfileDetails;
