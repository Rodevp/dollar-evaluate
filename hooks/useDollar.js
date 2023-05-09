export async function useCurrentValueDollar() {

    let response = undefined;

    try {
        response = await fetch('http://localhost:3000/api/scrap/', {
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