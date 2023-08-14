export const convertDate = (datestamp:string="1970-01-01T00:00:00") => {
    return `${new Date(datestamp).toLocaleString('en-GB', { timeZone: 'UTC' })} UTC`
}

export const convertUID = (uuid:string) => {
    return uuid.split("-").at(-1);
} 