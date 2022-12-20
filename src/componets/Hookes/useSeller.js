import { useEffect, useState } from "react"


const useSeller = email => {
    const [isSeller, setISeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setISeller(data.isSeller);
                    setIsSellerLoading(false);

                });
        };
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSeller;