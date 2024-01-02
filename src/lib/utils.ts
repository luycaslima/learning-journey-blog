type DateFormat = Intl.DateTimeFormatOptions['dateStyle'] //TODO Learn about this

export function formatDate(date: string, dateStyle : DateFormat = 'medium' ,locales = 'en') : string {
    const dateToFormat = new Date(date.replaceAll('-','/')) //because of safari
    const dateFormatter = new Intl.DateTimeFormat(locales,{dateStyle})
    return dateFormatter.format(dateToFormat)
}