export async function useCurrentValueDollar() {

    let response = undefined;

    try {
        response = await fetch('/api/', {
            next: {
                revalidate: 5
            }
        })
    } catch (error) {
        return '0'
    }

    const data = await response.json()

    return data?.value

}