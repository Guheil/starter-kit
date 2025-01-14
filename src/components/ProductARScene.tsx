// ProductARScene.tsx
import React, { useState } from 'react';
import {
  ViroARScene,
  ViroAmbientLight,
  ViroSpotLight,
  ViroNode,
  Viro3DObject,
  ViroQuad,
  ViroTrackingStateConstants,
} from '@reactvision/react-viro';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  model3d: any; // Assuming a .glb model file or any 3D object source
}

interface ProductARSceneProps {
  product: Product;
}

const ProductARScene: React.FC<ProductARSceneProps> = ({ product }) => {
  const [isTracking, setIsTracking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [position] = useState<[number, number, number]>([0, -0.5, -1]);
  const [scale] = useState<[number, number, number]>([0.2, 0.2, 0.2]);
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const onInitialized = (state: string) => {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setIsTracking(true);
    } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
      setIsTracking(false);
    }
  };

  const onLoadStart = () => {
    setIsLoading(true);
  };

  const onLoadEnd = () => {
    setIsLoading(false);
  };

  const onError = (event: any) => {
    console.error("3D Object Loading Error:", event);
    setIsLoading(false);
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroAmbientLight color="#ffffff" intensity={200} />
      <ViroSpotLight
        innerAngle={5}
        outerAngle={25}
        direction={[0, -1, 0]}
        position={[0, 5, 1]}
        color="#ffffff"
        castsShadow={true}
        shadowMapSize={2048}
        shadowNearZ={2}
        shadowFarZ={7}
        shadowOpacity={0.7}
      />

      <ViroNode position={position} dragType="FixedToWorld">
        <Viro3DObject
          source={product.model3d}
          type="GLB"
          position={[0, 0, 0]}
          scale={scale}
          rotation={rotation}
          lightReceivingBitMask={2}
          shadowCastingBitMask={1}
          transformBehaviors={['billboard']}
          onError={onError}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
        />

        <ViroQuad
          rotation={[-90, 0, 0]}
          position={[0, -0.001, 0]}
          width={2.5}
          height={2.5}
          arShadowReceiver={true}
        />
      </ViroNode>
    </ViroARScene>
  );
};

export default ProductARScene;
