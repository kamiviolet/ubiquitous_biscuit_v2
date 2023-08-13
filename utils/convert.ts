export const convertDate = (datestamp:string) => {
    return `${new Date(datestamp).toLocaleString('en-GB', { timeZone: 'UTC' })} UTC`
}

export const convertUID = (uuid:string) => {
    return uuid.split("-").at(-1);
} 