import { View, SafeAreaView} from "react-native"
import Logo from "../components/Logo"
import InputText from "../components/InputText"
import Languages from "../components/Languages"
import BottomTabs from "../components/BottomTabs"


function MainScreen(){
    return(
        <>
            <Logo/>
            <InputText/>
            <Languages/>
            <BottomTabs/>
        </>
    )
}

export default MainScreen