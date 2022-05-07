import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy},
    { sendMail: sendMailSpy}
)
describe('Submit Feedback', () => {
    it('should be able to submit feedback', async() => {
        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'Example test',
            screenshot:'data:image/png;base64,badbhhbdhbahbbhdbahbdbhdhdbhbsdbhsbnkkookookkoaoasabhbhab'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })
    it('should not be able to submit feedback without type', async() => {
        await expect(submitFeedback.execute({
            type:'',
            comment:'Example test',
            screenshot:'data:image/png;base64,badbhhbdhbahbbhdbahbdbhdhdbhbsdbhsbnkkookookkoaoasabhbhab'
        })).rejects.toThrow();
    })
    it('should not be able to submit feedback without comment', async() => {
        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'',
            screenshot:'data:image/png;base64,badbhhbdhbahbbhdbahbdbhdhdbhbsdbhsbnkkookookkoaoasabhbhab'
        })).rejects.toThrow();
    })
    it('should not be able to submit feedback without screenshot', async() => {
        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'example',
            screenshot:'123'
        })).rejects.toThrow();
    })
})