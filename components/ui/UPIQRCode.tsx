import React from 'react';
import QRCode from 'react-qr-code';

interface UPIQRCodeProps {
  upiUrl: string;
}

const UPIQRCode: React.FC<UPIQRCodeProps> = ({ upiUrl }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
    <QRCode value={upiUrl} size={180} />
    <p style={{ marginTop: 12, fontWeight: 500, textAlign: 'center' }}>
      Scan this QR with any UPI app to donate
    </p>
  </div>
);

export default UPIQRCode;
