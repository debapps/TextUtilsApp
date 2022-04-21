    // Style objects based on mode (light/red/green/blue).
    const lightTheme = {
        color: "black",
        backgroundColor:  "white",
        borderColor: "black"
    }

    const redTheme = {
        color: "#FAF3F3",
        backgroundColor: "#4C0027",
        borderColor: "#FAF3F3"
    }

    const greenTheme = {
        color: "#E4EFE7",
        backgroundColor: "#1E5128",
        borderColor: "#E4EFE7"
    }

    const blueTheme = {
        color: "#CAF0F8",
        backgroundColor: "#1A1A40",
        borderColor: "#CAF0F8"
    }

    // This function returns the style object based on the mode.
    export function setStyleMode(mode) {
        switch(mode) {
            case "light":
                return lightTheme;
            case "red":
                return redTheme;
            case "green":
                return greenTheme;
            case "blue":
                return blueTheme;
            default:
                return lightTheme;
        }
    }

    // This function returns the button style based on the mode.
    export function getBootStyle(mode) {
        let bootStyle = "";

        switch(mode) {
            case "light":
                bootStyle = "secondary"
                break;
            case "red":
                bootStyle = "danger"
                break;
            case "green":
                bootStyle = "success"
                break;
            case "blue":
                bootStyle = "primary"
                break;
            default:
                bootStyle = "secondary"
        }

        return bootStyle;
    }