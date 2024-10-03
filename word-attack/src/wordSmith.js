import React, { useState } from 'react';
import {
    Container,
    TextField,
    MenuItem,
    Button,
    Typography,
    Snackbar,
    Alert,
} from '@mui/material';

const WordAttack = () => {
    const [input, setInput] = useState('');
    const [operation, setOperation] = useState('');
    const [output, setOutput] = useState('');
    const [charIndex, setCharIndex] = useState('');
    const [startIndex, setStartIndex] = useState('');
    const [endIndex, setEndIndex] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [replaceValue, setReplaceValue] = useState('');
    const [separator, setSeparator] = useState('');
    const [repeatCount, setRepeatCount] = useState('');
    const [description, setDescription] = useState('');
    const [successAlert, setSuccessAlert] = useState(false);

    const operationDescriptions = {
        '1': 'Converts the input to upper case.',
        '2': 'Converts the input to lower case.',
        '3': 'Capitalizes the first letter of each word in the input.',
        '4': 'Gets the character at the specified index.',
        '5': 'Gets the substring from the start index to the end index.',
        '6': 'Slices the input from the start index to the end index.',
        '7': 'Trims whitespace from both ends of the input.',
        '8': 'Splits the input by the specified separator and joins with commas.',
        '9': 'Replaces the search value with the replace value in the input.',
        '10': 'Checks if the input includes the search value.',
        '11': 'Finds the index of the search value in the input.',
        '12': 'Finds the last index of the search value in the input.',
        '13': 'Repeats the input the specified number of times.',
        '14': 'Checks if the input starts with the search value.',
        '15': 'Checks if the input ends with the search value.',
    };

    const handleGenerate = () => {
        let result = '';
        switch (operation) {
            case '1':
                result = input.toUpperCase();
                break;
            case '2':
                result = input.toLowerCase();
                break;
            case '3':
                result = input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                break;
            case '4':
                result = input.charAt(Number(charIndex));
                break;
            case '5':
                result = input.substring(Number(startIndex), Number(endIndex));
                break;
            case '6':
                result = input.slice(Number(startIndex), Number(endIndex));
                break;
            case '7':
                result = input.trim();
                break;
            case '8':
                result = input.split(separator).join(', ');
                break;
            case '9':
                result = input.replace(searchValue, replaceValue);
                break;
            case '10':
                result = input.includes(searchValue).toString();
                break;
            case '11':
                result = input.indexOf(searchValue).toString();
                break;
            case '12':
                result = input.lastIndexOf(searchValue).toString();
                break;
            case '13':
                result = input.repeat(Number(repeatCount));
                break;
            case '14':
                result = input.startsWith(searchValue).toString();
                break;
            case '15':
                result = input.endsWith(searchValue).toString();
                break;
            default:
                result = input;
        }
        setOutput(result);
        setSuccessAlert(true);
    };

    const handleOperationChange = (e) => {
        const selectedOperation = e.target.value;
        setOperation(selectedOperation);
        setDescription(operationDescriptions[selectedOperation] || '');
    };

    const handleCloseAlert = () => {
        setSuccessAlert(false);
    };

    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                Word Smith
            </Typography>
            <br />
            <TextField
                label="Enter Your Input Here"
                multiline
                fullWidth
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                sx={{ mb: 2 }}
            />

            <TextField
                select
                label="Select Operation"
                fullWidth
                value={operation}
                onChange={handleOperationChange}
                sx={{ mb: 2 }}
                SelectProps={{
                    MenuProps: {
                        PaperProps: {
                            style: {
                                textAlign: 'center',
                            },
                        },
                    },
                }}
            >
                <MenuItem value="1">To Upper Case</MenuItem>
                <MenuItem value="2">To Lower Case</MenuItem>
                <MenuItem value="3">Capitalize First Letter</MenuItem>
                <MenuItem value="4">Character At Index</MenuItem>
                <MenuItem value="5">Substring ( Start, End )</MenuItem>
                <MenuItem value="6">Slice ( Start, End )</MenuItem>
                <MenuItem value="7">Trim</MenuItem>
                <MenuItem value="8">Split ( Separator )</MenuItem>
                <MenuItem value="9">Replace ( Search Value, New Value )</MenuItem>
                <MenuItem value="10">Includes Search String</MenuItem>
                <MenuItem value="11">Index Of ( Search Value )</MenuItem>
                <MenuItem value="12">Last Index Of ( Search Value )</MenuItem>
                <MenuItem value="13">Repeat ( Count )</MenuItem>
                <MenuItem value="14">Starts With ( Search String )</MenuItem>
                <MenuItem value="15">Ends With ( Search String )</MenuItem>
            </TextField>

            {description && (
                <Typography
                    sx={{
                        mb: 2,
                        p: 2,
                        backgroundColor: '#32de84',
                        color: 'black',
                        borderRadius: 1,
                        textAlign: 'center',
                    }}
                >
                    {description}
                </Typography>
            )}

            {['4', '5', '6'].includes(operation) && (
                <>
                    {operation === '4' && (
                        <TextField
                            label="Character Index"
                            fullWidth
                            value={charIndex}
                            onChange={(e) => setCharIndex(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                    )}
                    {['5', '6'].includes(operation) && (
                        <>
                            <TextField
                                label="Start Index"
                                fullWidth
                                value={startIndex}
                                onChange={(e) => setStartIndex(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                label="End Index"
                                fullWidth
                                value={endIndex}
                                onChange={(e) => setEndIndex(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                        </>
                    )}
                </>
            )}

            {['9', '10', '11', '12', '14', '15'].includes(operation) && (
                <TextField
                    label="Search Value"
                    fullWidth
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    sx={{ mb: 2 }}
                />
            )}

            {['9'].includes(operation) && (
                <TextField
                    label="Replace Value"
                    fullWidth
                    value={replaceValue}
                    onChange={(e) => setReplaceValue(e.target.value)}
                    sx={{ mb: 2 }}
                />
            )}

            {['8'].includes(operation) && (
                <TextField
                    label="Separator"
                    fullWidth
                    value={separator}
                    onChange={(e) => setSeparator(e.target.value)}
                    sx={{ mb: 2 }}
                />
            )}

            {['13'].includes(operation) && (
                <TextField
                    label="Repeat Count"
                    fullWidth
                    value={repeatCount}
                    onChange={(e) => setRepeatCount(e.target.value)}
                    sx={{ mb: 2 }}
                />
            )}

            <Button variant="contained" onClick={handleGenerate} sx={{ mt: 2, mb: 2 }}>
                Generate
            </Button>

            <TextField
                label="Output"
                multiline
                fullWidth
                rows={4}
                value={output}
                onChange={(e) => setOutput(e.target.value)}
                sx={{ mb: 2 }}
            />

            <Snackbar
                open={successAlert}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                    Operation Performed Successfully
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default WordAttack;