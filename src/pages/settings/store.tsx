import { DialogStore } from '@/components/settingsSettings/dialog-store';
import HeaderSettings from '@/components/settingsSettings/header-settings';
import UserSettings from '@/components/settingsSettings/profile-settings';
import Store from '@/components/settingsSettings/store';

export default function SettingsStore() {
  return (
    <div className="flex flex-col gap-6">
      <HeaderSettings />
      <UserSettings />
      <div className="flex justify-end p-3">
        <DialogStore />
      </div>
      
    </div>
  );
}
