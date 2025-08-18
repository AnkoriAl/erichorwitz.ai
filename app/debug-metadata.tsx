// This is a debugging component to check metadata rendering
// Remove this file after debugging

export default function DebugMetadata() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      right: 0, 
      background: 'red', 
      color: 'white', 
      padding: '10px',
      zIndex: 9999,
      fontSize: '12px'
    }}>
      DEBUG: Page Rendered
    </div>
  );
}
