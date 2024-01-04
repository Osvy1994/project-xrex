import { useEffect, useState } from "react";

const url =
	"https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";

export const useMedia = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const result = await response.json();
        setData(result.entries);
        setIsLoading(false)
			} catch (error) {
        console.error(`Server Error: ${error.message}`);
        setIsLoading(false)
			}
		};
		fetchData();
	}, []);
	return { data, isLoading };
};
