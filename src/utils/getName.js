import Resume from "../settings/resume.json";

const names = Resume.basics.name.split(" ");

export const Degree = names[0];

export const FirstName = names[1];

export const LastName = names[2];

export const Initials = FirstName.charAt(0)
    .toUpperCase()
    .concat(LastName.charAt(0).toUpperCase());
