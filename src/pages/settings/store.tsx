import HeaderSettings from "@/components/settingsSettings/header-settings";
import UserSettings from "@/components/settingsSettings/profile-settings";
import Store from "@/components/settingsSettings/store";


export default function SettingsStore() {
  return <div>
    <HeaderSettings />
    <UserSettings />
    <Store />
  </div>;
}
