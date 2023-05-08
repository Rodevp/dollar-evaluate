export async function useCurrentValueDollar() {

    const response = await fetch('http://localhost:3000/api/', {
        next: {
            revalidate: 5
        }
    })

    const data = await response.json()

    console.log( data )

    return data?.value

}