import axios from "axios";

const base_url: string = "https://onesignal.com/api/v1/notifications"

export const createReminder = async (data: Omit<Reminder, "id">, userId: string) => {

    if (navigator.onLine) {
        try {
            // one signal to send notification
            const response = await axios.post(base_url,
                {
                    app_id: import.meta.env.VITE_ONESIGNAL_APP_ID,
                    contents: { en: `${data.description}` },
                    headings: { en: `${data.title}` },
                    send_after: `${data.time.slice(0, 10)} ${data.time.slice(11, 16)}:00 GMT+0530`,
                    include_player_ids: [userId]
                },
                {
                    headers: {
                        Authorization: import.meta.env.VITE_ONESIGNAL_REST_API_KEY,
                        "Content-Type": "application/json",
                    },
                }
            )
            return (response.data?.id)
        } catch (error) {
            console.error(error)
            return;
        }
    }
    alert("you are offline")
}


export const deleteReminder = async (id: Reminder["id"]) => {
    if (navigator.onLine) {
        try {

            const response = await axios.delete(`${base_url}/${id}?app_id=${import.meta.env.VITE_ONESIGNAL_APP_ID}`,
                {
                    headers: {
                        Authorization: import.meta.env.VITE_ONESIGNAL_REST_API_KEY,
                        "Content-Type": "application/json",
                    },
                }
            )
            return response.data
        } catch (error) {
            console.error(error);
            return;
        }
    }
    alert("you are offline")
}
