import { useEffect } from "react";

export default function GetCity (props) {
    useEffect( () => {
        let isLast = true;
        const fetchData = () => {
            fetch(`https://geo.api.gouv.fr/communes?nom=${props.nameCity}&limit=5`)
            .then(response => response.json())
            .then(data => props.setApiListCities(data) && isLast )
        }
        fetchData();
        return () => {
            isLast = false;
        }
    }, [props.nameCity]);
    return null;
}