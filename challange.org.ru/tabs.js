;(function() {
  function selectTab(tabNode) {
    const tabId = tabNode.dataset.tabId

    tabNode.parentNode.querySelectorAll('.tab').forEach(t => {
      if (t.dataset.tabId === tabId) {
        t.classList.add('current')
        return
      }

      t.classList.remove('current')
    })

    const tabsId = tabNode.parentNode.dataset.tabsId

    document
      .querySelectorAll('.tabs-content[data-tabs-id="' + tabsId + '"] [data-tab-id]')
      .forEach(content => {
        content.hidden = content.dataset.tabId !== tabId
      })
  }

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', e => {
      selectTab(e.currentTarget)
    })
  })

  document.querySelectorAll('.tab.current').forEach(tab => {
    selectTab(tab)
  })
})()
