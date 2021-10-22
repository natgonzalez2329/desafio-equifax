import React from 'react'

const ConfigPluginModified = () => {

  const arrayPluginsModified = [];

  return (
    <div>
      <span>ConfigPluginModified</span>
      <ul>
        { arrayPluginsModified.length === 0 ? (
          <h1 className="text-center fst-italic text-black-50">Select and modify plugins</h1>
        ): (
          <h1>Plugins</h1>
        )}
        </ul>
    </div>
  )
}

export default ConfigPluginModified
