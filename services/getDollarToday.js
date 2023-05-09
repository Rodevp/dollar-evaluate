export async function getCurrentValueDollar() {

    let response = undefined;

    try {
        response = await fetch('/api/scrap')
    } catch (error) {
        console.log(error?.message)
        return '0'
    }

    const data = await response.json()

    return data?.value

}