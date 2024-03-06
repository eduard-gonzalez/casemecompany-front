import { useContext, useEffect, useState } from "react";
import { Form, Input, Label } from "reactstrap";
import Btn from "@/Elements/Buttons/Btn";
import { RiCloseLine, RiSettings3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import I18NextContext from "@/Helper/I18NextContext";
import { useTranslation } from "@/app/i18n/client";
import ThemeOptionContext from "@/Helper/ThemeOptionsContext";

const SettingBox = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { themeOption } = useContext(ThemeOptionContext);
  const { t } = useTranslation(i18Lang, 'common');
  const [openSetting, setOpenSetting] = useState(false);
  const [rtlValue, setRtlValue] = useState(themeOption?.general?.language_direction?themeOption?.general?.language_direction:"ltr");
  const [lightDarkMode, setLightDarkMode] = useState(themeOption?.general?.mode?themeOption?.general?.mode:"light");
  const [themeColor, setThemeColor] = useState("#0da487");
  const pathName = usePathname();
  useEffect(() => {
    const currentThemeColor = getComputedStyle(document.documentElement).getPropertyValue("--theme-color");
    if (currentThemeColor) {      
      setThemeColor(currentThemeColor.trimStart());
    } else {
      setThemeColor("#0da487");
    }
  }, [pathName]); 
  
   useEffect(() => {
    setThemeColor(themeOption?.general?.primary_color ?? "#0da487" )
    themeOption?.general?.mode === "dark"? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    themeOption?.general?.language_direction == "rtl"? document.body.setAttribute("dir", "rtl"): document.body.setAttribute("dir", "ltr");
  }, [pathName,themeOption?.general?.mode,themeOption?.general?.language_direction]);

  const handleRtl = (value) => {
    setRtlValue(value);
    value == "rtl"? document.body.setAttribute("dir", "rtl"): document.body.setAttribute("dir", "ltr");
  };
  const handleLightDarkMode = (value) => {
    setLightDarkMode(value);
    value == "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  };
  const handleColorChange = (event) => {
    const { value } = event.target;
    setThemeColor(value);
    document.documentElement.style.setProperty("--theme-color", value);
  };
  return (
    <div className="setting-box">
     </div>
  );
};

export default SettingBox;
