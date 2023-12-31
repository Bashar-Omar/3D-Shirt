/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);
  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 1260;

    // Set The initial Position of The model
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else {
        targetPosition = [0, 0, 2];
      }
    }

    // Set Model Camera Position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);
    // Set The Model Rotation Smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
};

export default CameraRig;
