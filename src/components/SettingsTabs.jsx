import React, { useState } from 'react';
import ProfileSettings from './ProfileSettings';
import PreferencesSettings from './PreferencesSettings';
import SecuritySettings from './SecuritySettings';

const SettingsTabs = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-4xl w-full mx-auto shadow-md bg-white my-4 rounded-md p-6">
      <div className="dark:border-gray-700 mb-4">
        <ul className="flex justify-start flex-wrap -mb-px" id="myTab" role="tablist">
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 ${activeTab === 'profile' ? 'text-teal-600 border-teal-600' : 'text-teal-950 border-teal-950 hover:text-teal-600 hover:border-teal-600'}`}
              onClick={() => handleTabClick('profile')}
              role="tab"
              aria-controls="profile"
              aria-selected={activeTab === 'profile' ? 'true' : 'false'}
            >
              Profile
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 ${activeTab === 'preferences' ? 'text-teal-600 border-teal-600' : 'text-teal-800 border-teal-700 hover:text-teal-600 hover:border-teal-600'}`}
              onClick={() => handleTabClick('preferences')}
              role="tab"
              aria-controls="preferences"
              aria-selected={activeTab === 'preferences' ? 'true' : 'false'}
            >
              Preferences
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 ${activeTab === 'security' ? 'text-teal-600 border-teal-600' : 'text-teal-800 border-teal-700 hover:text-teal-600 hover:border-teal-600'}`}
              onClick={() => handleTabClick('security')}
              role="tab"
              aria-controls="security"
              aria-selected={activeTab === 'security' ? 'true' : 'false'}
            >
              Security
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div className={`bg-white p-4 rounded-lg ${activeTab !== 'profile' && 'hidden'}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <ProfileSettings/>
        </div>
        <div className={`bg-white p-4 rounded-lg ${activeTab !== 'preferences' && 'hidden'}`} id="preferences" role="tabpanel" aria-labelledby="preferences-tab">
          <PreferencesSettings/>
        </div>
        <div className={`bg-white p-4 rounded-lg ${activeTab !== 'security' && 'hidden'}`} id="security" role="tabpanel" aria-labelledby="security-tab">
          <SecuritySettings/>
        </div>
      </div>
    </div>
  );
};

export default SettingsTabs;
