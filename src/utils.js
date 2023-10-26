export function generatePassword({ length, uppercase, lowercase, num, symbol }) {
    let chars = ''
    console.log(uppercase, lowercase, num, symbol)
    if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz'
    if (num) chars += '0123456789'
    if (symbol) chars += '!@#$%^&*()_+'

    if (!chars) {
        return
    }

    let password = ''
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * chars.length)
        password += chars.charAt(index)
    }
    console.log(password)
    return password
}
