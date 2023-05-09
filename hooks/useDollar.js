export async function useCurrentValueDollar() {

    let response = undefined;

    try {
        response = await fetch('/api/scrap', {
            next: {
                revalidate: 5
            }
        })
    } catch (error) {
        console.log(error?.message)
        return '0'
    }

    const data = await response.json()

    return data?.value

}