// @ts-check
const NOTIFICATION_ELEMENT_ID = 'webhighlights-notifications';

function getOrCreateNotificationElement() {
  const existingElement = document.getElementById(NOTIFICATION_ELEMENT_ID);
  if (!existingElement) {
    const element = document.createElement('div');
    element.id = NOTIFICATION_ELEMENT_ID;
    document.body.append(element);
    return element;
  }
  return existingElement;
}

function dispatchWebHighlightsNotification(event, eventInitDict) {
  getOrCreateNotificationElement().dispatchEvent(
    new CustomEvent(event, eventInitDict),
  );
}
