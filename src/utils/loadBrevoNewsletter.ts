// utils/getOS.ts
export function getOSNewsletter() {
	const userAgent = navigator.userAgent;
	if (userAgent.indexOf("Mac") !== -1) {
		return "Mac";
	}
	return "Other";
}
