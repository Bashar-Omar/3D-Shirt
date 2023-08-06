/* eslint-disable react/prop-types */
import state from '../store';
import { useSnapshot } from 'valtio';

const Tab = ({ tab, isFilterTab, isActiveTap, handleClick }) => {
  const snap = useSnapshot(state);
  const activeStyles =
    isFilterTab && isActiveTap
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 };
  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? 'glassmorhism rounded-full' : 'rounded-4'
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? 'h-2/3 w-2/3' : 'h-11/12 w-11/12 object-contain'
        }`}
      />
    </div>
  );
};

export default Tab;
