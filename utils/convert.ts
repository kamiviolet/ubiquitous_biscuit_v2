export const convertDate = (datestamp:string="1970-01-01T00:00:00") => {
    return `${new Date(datestamp).toLocaleString('en-GB', { timeZone: 'UTC' })} UTC`
}

export const convertUID = (uuid:string) => {
    return uuid.split("-").at(-1);
} 

export const getRequestPath = (url:string, type:string, action:string) => {
    let result:string[]|string = "/";
    if (type == "comment") {
        if (action == "post") 
            result = url.match(/^(.*)post-comment$/) ?? "/";
        if (action == "edit")
            result = url.match(/^(.*)edit-comment$/) ?? "/";
    } 
    if (type == "article") {
        if (action == "post") 
            result = url.match(/^(.*)post-article$/) ?? "/";
        if (action == "edit")
            result = url.match(/^(.*)edit-article$/) ?? "/";
    }
    return result == "/" ? result : result[1];
  }