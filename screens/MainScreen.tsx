import { View, SafeAreaView} from "react-native"
import Logo from "../components/Main/Logo"
import InputText from "../components/Main/InputText"
import Languages from "../components/Main/Languages"
import BottomTabs from "../components/Main/BottomTabs"


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