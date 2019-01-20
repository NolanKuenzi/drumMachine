import React from 'react';
import { DrumPad } from '../drumPad.js';
import { cleanup, render, fireEvent } from 'react-testing-library';

afterEach(cleanup);

const playAudioTest = jest.spyOn(DrumPad.prototype, "playAudio");
describe("<DrumPad /> Component", () => {
  test("Click events change the display text, the drumPad's item's opacity, and play the audio", () => {
    const { getByTestId } = render(<DrumPad />);
    const displayText = getByTestId("displayValue");
    const clickTest1 = getByTestId("Heater-1");
    const clickTest2 = getByTestId("Chord_1");
    fireEvent.click(clickTest1);
    expect(displayText.value).toBe("Heater-1");
    expect(clickTest1.style.opacity).toBe("0.1");
    expect(playAudioTest).toHaveBeenCalled();
    fireEvent.click(clickTest2);
    expect(displayText.value).toBe("Chord_1");
    expect(clickTest2.style.opacity).toBe("0.1");
    expect(playAudioTest).toHaveBeenCalled();
  });
  test("keyUp events change the display text, the drumPad's item's opacity, and play the audio", () => {
    const { getByTestId } = render(<DrumPad />);
    const keyEventArea = getByTestId("drumPadContain");
    const displayText = getByTestId("displayValue");
    const opacityTest1 = getByTestId("Heater-1");
    const opacityTest2 = getByTestId("Chord_1");
    fireEvent.keyUp(keyEventArea, {key: 'q'});
    expect(displayText.value).toBe("Heater-1");
    expect(playAudioTest).toHaveBeenCalled();
    expect(opacityTest1.style.opacity).toBe("0.1");
    fireEvent.keyUp(keyEventArea, {key: 's'});
    expect(displayText.value).toBe("Chord_1");
    expect(opacityTest2.style.opacity).toBe("0.1");
    expect(playAudioTest).toHaveBeenCalled();
  });
}); 
 